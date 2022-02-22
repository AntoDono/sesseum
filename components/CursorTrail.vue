<template>
    <div>
        <p>Move your mouse...</p>
            <svg ref="cursorsvg">
        </svg>
    </div>
</template>

<script>
import gsap from "gsap"

export default {
    name: "CursorTrail",
    methods:{
        init(){
            
            gsap.defaults({ease: 'none'});

            var svgns = "http://www.w3.org/2000/svg";
            var root = this.$refs.cursorsvg
            
            var pointer = { 
                x: null, 
                y: null 
            };

            var prevPointer = {
                x: null,
                y: null,
            }

            var lines = []

            window.addEventListener("mousemove", function(event) {
                if (pointer.x==null){
                    prevPointer.x = event.clientX
                    prevPointer.y = event.clientY
                }else{
                    prevPointer.x = pointer.x
                    prevPointer.y = pointer.y
                }
                pointer.x = event.clientX;
                pointer.y = event.clientY;
                let line = createLine(prevPointer, pointer)
                root.appendChild(line)
                lines.push(line)
                if (lines.length > 100){
                    lines[0].remove()
                    lines.shift()
                }
            });


            function createLine(prevPointer, pointer) {
                var line = document.createElementNS(svgns, "line");
                line.setAttribute('x1', prevPointer.x)
                line.setAttribute('y1', prevPointer.y)
                line.setAttribute('x2', pointer.x)
                line.setAttribute('y2', pointer.y)
                line.setAttribute('stroke', 'rgb(255,0,0)')
                line.setAttribute('stroke-width', 1);
                
                return line
            }

        }
    },
    mounted(){
        this.init()
    }
}
</script>

<style scoped>

body {
  overflow: hidden;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

line {
  stroke: #3f51b5;
  stroke-width: 2;
}

p {
  margin: 10px;
  color: #999;
}

</style>
