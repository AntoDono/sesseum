<template>
    <canvas class="webgl border-2 border-black"></canvas>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
                }
            }
        }
    },
    methods:{
        tick(){
            this.graphics.renderer.render(this.graphics.scene, this.graphics.camera)
            window.requestAnimationFrame(this.tick)

        },
        init(){

            console.log(this.graphics.sizes)

            const canvas = document.querySelector('canvas.webgl')
            this.graphics.renderer = new THREE.WebGLRenderer({
                canvas: canvas
            })
            this.graphics.renderer.setSize(this.graphics.sizes.width, this.graphics.sizes.height)
            this.graphics.camera = new THREE.PerspectiveCamera(75, this.graphics.sizes.width / this.graphics.sizes.height, 0.1, 100)
            this.graphics.scene.add(this.graphics.camera)

            this.graphics.controls = new OrbitControls( this.graphics.camera, this.graphics.renderer );

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            cube.rotation.set(1,1,1)
            this.graphics.scene.add( cube );

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

            this.tick()

        }
    },
    mounted(){

        this.graphics.scene = new THREE.Scene()
        this.graphics.scene.background = new THREE.Color("gray")

        this.init()
    }
}
</script>
