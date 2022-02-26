<template>
    <canvas class="webgl"></canvas>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default {
    name: "Amongus",
    props:{
        interactive: Boolean,
        divider: Number,
    },
    data(){
        return {
            graphics:{
                scene: null,
                camera: null,
                cameraInitialPosition:{
                    y: 6
                },
                controls: null,
                renderer: null,
                fog: null,
                sizes: {
                    width: window.innerWidth/this.divider,
                    height: window.innerHeight
                },
                lights:{
                    spotLight: null,
                    ambientLight: null,
                },
                models:{
                    loaded: [],
                    amongus: null,
                },
                textures:{
                    floor: {
                        normal: null,
                        color: null
                    },
                    concrete: {
                        normal: null,
                        color: null
                    },
                    background: null
                },
            },
            loaders:{
                gltfLoader: null,
                dracoLoader: null,
                loadingManager: null,
                textureLoader: null,
            }
        }
    },
    methods:{
        enableRepeat(texture,x=1, y=1){
            texture.repeat.set(x,y)
            texture.wrapS = THREE.RepeatWrapping
            texture.wrapT = THREE.RepeatWrapping
        },
        addWall(
            {
                length=10, width=10, color='#444444', 
                metalnaess=0,roughness=0, normalMap=null, 
                map=null, position={x:0,y:0,z:0}, rotation={x:0,y:0,z:0}
            } = {}
        ){
            const wall = new THREE.Mesh(
                new THREE.PlaneGeometry(width, length),
                new THREE.MeshStandardMaterial({
                    color: color,
                    metalness: metalnaess,
                    roughness: roughness,
                    map: map,
                    normalMap: normalMap
                })
            )

            wall.receiveShadow = true
            wall.rotation.set(rotation.x || 0, rotation.y || 0, rotation.z || 0)
            wall.position.set(position.x || 0, position.y || 0, position.z || 0)

            this.graphics.scene.add(wall)
        },
        load_model(
            {
                path, propname, position={x:0,y:0,z:0}, 
                rotation={x:0, y:0, z:0}, scale={x:1, y:1, z:1},
                store=false
            }
            ={}
        ){
            this.loaders.gltfLoader.load(
                path,
                (gltf) =>
                {
                    let prop = gltf.scene

                    prop.name = propname

                    prop.position.x = position.x || 0
                    prop.position.y = position.y || 0
                    prop.position.z = position.z || 0
                    
                    prop.rotation.x = rotation.x || 0
                    prop.rotation.y = rotation.y || 0
                    prop.rotation.z = rotation.z || 0

                    prop.scale.x = scale.x || 1
                    prop.scale.y = scale.y || 1
                    prop.scale.z = scale.z || 1

                    prop.receiveShadow = true

                    this.graphics.models.loaded.push(prop)

                    this.graphics.scene.add(prop)

                    if (store!=false){
                        this.graphics.models[store] = prop
                        console.log(this.graphics.models)
                    }

                }
            )

        },
        tick(){
            this.graphics.renderer.render(this.graphics.scene, this.graphics.camera)
            this.graphics.controls.update()
            window.requestAnimationFrame(this.tick)
        },
        init(){

            const canvas = document.querySelector('canvas.webgl')
            this.graphics.renderer = new THREE.WebGLRenderer({
                canvas: canvas
            })
            
            this.graphics.scene.background = this.graphics.textures.background

            this.graphics.fog = new THREE.Fog("black",25, 500)

            this.graphics.scene.fog = this.graphics.fog

            this.graphics.renderer.setSize(this.graphics.sizes.width, this.graphics.sizes.height)
            this.graphics.camera = new THREE.PerspectiveCamera(75, this.graphics.sizes.width / this.graphics.sizes.height, 0.1, 100)
            this.graphics.scene.add(this.graphics.camera)

            this.graphics.controls = new OrbitControls( this.graphics.camera, canvas );
            this.graphics.camera.position.set(0,this.graphics.cameraInitialPosition.y,0)
            

            if (!this.interactive) {
                this.graphics.controls.enabled = false
                this.graphics.controls.autoRotate = true
                this.graphics.controls.target = this.graphics.models.amongus.position
                window.addEventListener('scroll', (event)=>{
                    this.graphics.camera.position.y = this.graphics.cameraInitialPosition.y + 0.002 * window.scrollY
                })
            }else{
                this.graphics.camera.lookAt(this.graphics.models.amongus.position)
            }

            this.graphics.controls.enableZoom = true
            this.graphics.controls.maxDistance = 50
            this.graphics.controls.minDistance = 1
            this.graphics.controls.autoRotateSpeed = 7
            this.graphics.controls.enableDamping = true
            this.graphics.controls.maxPolarAngle = Math.PI/2.1



            const geometry = new THREE.CylinderGeometry( 1, 1, 4, 32 );
            const material = new THREE.MeshStandardMaterial({
                map: this.graphics.textures.concrete.color,
                normalMap: this.graphics.textures.concrete.normal
            });
            const cylinder = new THREE.Mesh( geometry, material );
            this.graphics.scene.add( cylinder );

            this.graphics.camera.position.z = 5;

            window.addEventListener('resize', () =>
            {
                // Update sizes
                this.graphics.sizes.width = window.innerWidth/this.divider
                this.graphics.sizes.height = window.innerHeight

                // Update camera
                this.graphics.camera.aspect = this.graphics.sizes.width / this.graphics.sizes.height
                this.graphics.camera.updateProjectionMatrix()

                // Update renderer
                this.graphics.renderer.setSize(this.graphics.sizes.width, this.graphics.sizes.height)
                this.graphics.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

            this.graphics.lights.spotLight = new THREE.SpotLight( 0xffffff, 5, 70 ); // Adds spot light
            this.graphics.lights.spotLight.angle = Math.PI/16
            this.graphics.lights.spotLight.position.set( 0, 15, 0 );

            this.graphics.lights.ambientLight = new THREE.AmbientLight( "#b0b0b0" ); // soft white light

            // Adds floor
            this.addWall({
                length: 200,
                width: 200,
                roughness: 0.5,
                rotation: {x: - Math.PI/2},
                map: this.graphics.textures.floor.color,
                normalMap: this.graphics.textures.floor.normal
            })


            this.graphics.scene.add(this.graphics.lights.spotLight)
            this.graphics.scene.add(this.graphics.lights.ambientLight)

            this.tick()

        }
    },
    mounted(){

        this.graphics.scene = new THREE.Scene()
        this.graphics.scene.background = new THREE.Color("gray")

        this.loaders.loadingManager = new THREE.LoadingManager(
            ()=>{ // Done loading callback
                console.log("Done loading")
                this.init()
            },
            (itemUrl, itemsLoaded, itemsTotal)=>{ // Progress call back
                let percent = itemsLoaded/itemsTotal
                console.log(`Current loading progress: ${percent}`)
                this.$emit('loaded', percent)
            }
        )

        this.loaders.dracoLoader = new DRACOLoader(this.loaders.loadingManager) 
        this.loaders.dracoLoader.setDecoderPath('/draco/')

        this.loaders.gltfLoader = new GLTFLoader(this.loaders.loadingManager)
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)

        this.loaders.textureLoader = new THREE.TextureLoader(this.loaders.loadingManager)

        this.graphics.textures.floor.color = this.loaders.textureLoader.load('/textures/color/floor.jpg')
        this.graphics.textures.floor.normal = this.loaders.textureLoader.load('/textures/normals/floor.jpg')
        this.enableRepeat(this.graphics.textures.floor.normal, 20, 20)
        this.enableRepeat(this.graphics.textures.floor.color, 20, 20)

        this.graphics.textures.concrete.color = this.loaders.textureLoader.load('/textures/color/concrete.jpg')
        this.graphics.textures.concrete.normal = this.loaders.textureLoader.load('/textures/normals/concrete.jpg')
        this.enableRepeat(this.graphics.textures.concrete.normal, 1, 1)
        this.enableRepeat(this.graphics.textures.concrete.color, 1, 1)

        this.graphics.textures.background = this.loaders.textureLoader.load('/textures/background/amongus.jpg')

        this.load_model({
            path: 'blender/amongus2/scene.gltf',
            scale: {x: 0.01, y: 0.01, z: 0.01},
            position: {y:2},
            store: "amongus"
        })

    }
}
</script>
