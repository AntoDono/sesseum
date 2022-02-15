<template>
    <canvas class="webgl border-2 border-black"></canvas>
</template>

<script>
import * as THREE from 'three'

export default {
    name: "Amongus",
    data(){
        return {
            graphics:{
                scene: null,
                sizes: {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    },
    methods:{
        init(){
            this.graphics.sizes.width = window.innerWidth
            this.graphics.sizes.height = window.innerHeight

            console.log(this.graphics.sizes)

            const canvas = document.querySelector('canvas.webgl')
            this.graphics.renderer = new THREE.WebGLRenderer({
                canvas: canvas
            })
            this.graphics.camera = new THREE.PerspectiveCamera(75, this.graphics.sizes.width / this.graphics.sizes.height, 0.1, 100)
            this.graphics.scene.add(this.graphics.camera)

            window.addEventListener('resize', () =>
            {
                // Update sizes
                this.graphics.sizes.width = window.innerWidth
                this.graphics.sizes.height = window.innerHeight

                // Update camera
                this.graphics.camera.aspect = this.graphics.sizes.width / this.graphics.sizes.height
                this.graphics.camera.updateProjectionMatrix()

                // Update renderer
                this.graphics.renderer.setSize(this.graphics.sizes.width, this.graphics.sizes.height)
                this.graphics.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })


        }
    },
    mounted(){

        this.graphics.scene = new THREE.Scene()
        this.graphics.scene.background = new THREE.Color("gray")

        this.init()
    }
}
</script>
