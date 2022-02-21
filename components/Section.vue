<template>
    <div class="w-full flex justify-around items-center p-7 flex-wrap" ref="outer">
        <div class="max-w-4xl">
            <h2 class="text-6xl font-redressed text-torange">{{title}}</h2>
            <p class="text-lg" ref="text">{{description}}</p>
        </div>
        <div>
            <img class="w-96 h-96 rounded-3xl" src="~/assets/images/sus.jpg" alt="Some image here"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Section",
    props:{
        title:{
            type: String,
            required: true
        },
        description: {
            type: String,
            default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. `
        },
        image: String,
        reverse: Boolean,
        center: Boolean,
    },
    mounted(){
        if (this.center==true){
            this.$refs.outer.classList.add("flex-col")
            this.$refs.text.classList.add("pb-7")
        }
        if (this.reverse==true){
            this.$refs.outer.classList.add("flex-row-reverse")
        }
    }
}
</script>
