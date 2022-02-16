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
    data(){
        return {
            graphics:{
                scene: null,
                camera: null,
                controls: null,
                renderer: null,
                sizes: {
                    width: window.innerWidth/2,
                    height: window.innerHeight
                },
                lights:{
                    spotLight: null,
                    ambientLight: null,
                },
                models:{
                    loaded: [],
                    amongus: null,
                }
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
                    normalMap: normalMap,
                    map: map
                })
            )

            if (normalMap) wall.normalMap = normalMap
            if (map) wall.map = map

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
            this.graphics.renderer.setSize(this.graphics.sizes.width, this.graphics.sizes.height)
            this.graphics.camera = new THREE.PerspectiveCamera(75, this.graphics.sizes.width / this.graphics.sizes.height, 0.1, 100)
            this.graphics.scene.add(this.graphics.camera)

            this.graphics.controls = new OrbitControls( this.graphics.camera, canvas );
            this.graphics.controls.autoRotate = true
            this.graphics.controls.enableZoom = true
            this.graphics.controls.autoRotateSpeed = 10
            this.graphics.controls.enableDamping = true

            this.graphics.camera.lookAt(this.graphics.models.amongus.position)
            this.graphics.camera.position.set(0,6,0)
            this.graphics.camera.zoom = 1

            const geometry = new THREE.CylinderGeometry( 1, 1, 4, 32 );
            const material = new THREE.MeshBasicMaterial( {color: "white"} );
            const cylinder = new THREE.Mesh( geometry, material );
            this.graphics.scene.add( cylinder );

            this.graphics.camera.position.z = 5;

            window.addEventListener('resize', () =>
            {
                // Update sizes
                this.graphics.sizes.width = window.innerWidth/2
                this.graphics.sizes.height = window.innerHeight

                // Update camera
                this.graphics.camera.aspect = this.graphics.sizes.width / this.graphics.sizes.height
                this.graphics.camera.updateProjectionMatrix()

                // Update renderer
                this.graphics.renderer.setSize(this.graphics.sizes.width, this.graphics.sizes.height)
                this.graphics.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

            this.graphics.lights.spotLight = new THREE.SpotLight( 0xffffff, 2.5, 50 ); // Adds spot light
            this.graphics.lights.spotLight.angle = Math.PI/16
            this.graphics.lights.spotLight.position.set( 0, 10, 0 );

            this.graphics.lights.ambientLight = new THREE.AmbientLight( "#b0b0b0" ); // soft white light

            // Adds floor
            this.addWall({
                length: 100,
                width: 100,
                rotation: {x: - Math.PI/2},
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
                this.$emit('loading', percent)
            }
        )

        this.loaders.dracoLoader = new DRACOLoader(this.loaders.loadingManager) 
        this.loaders.dracoLoader.setDecoderPath('/draco/')

        this.loaders.gltfLoader = new GLTFLoader(this.loaders.loadingManager)
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)

        this.loaders.textureLoader = new THREE.TextureLoader(this.load                                                                                                                               )
        this.load_model({
            path: 'blender/amongus/scene.gltf',
            position: {y:2},
            store: "amongus"
        })

    }
}
</script>
