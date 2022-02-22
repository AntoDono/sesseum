<template>
    <svg class="fixed top-0 left-0 w-full h-full z-30" ref="cursorsvg"/>
</template>

<script>
import gsap from "gsap"

export default {
    name: "CursorTrail",
    methods:{
        init(){
            gsap.defaults({ease: 'none'});

            var svgns = "http://www.w3.org/2000/svg";
            var root = document.querySelector("svg");
            var ease = 0.75;
            
            var pointer = { 
                x: 0, 
                y: 0 
            };

            window.addEventListener("mousemove", function(event) {
                pointer.x = event.clientX;
                pointer.y = event.clientY;
            });

            var leader = pointer;

            var total = 100;
            for (var i = 0; i < total; i++) {
            leader = createLine(leader, i);
            }

            function createLine(leader, i) {
            
                var line = document.createElementNS(svgns, "line");
                line.setAttribute('stroke', 'rgb(245, 178, 78)')
                line.setAttribute('stroke-width', 7);

                root.appendChild(line);
                
                gsap.set(line, { x: -15, y: -15, alpha: (total - i) / total });
                
                gsap.to(line, {
                    duration: 1000,
                    x: "+=1",
                    y: "+=1",
                    repeat: -1,
                    modifiers: {
                    x: function() {
                        let posX = gsap.getProperty(line, "x");
                        let leaderX = gsap.getProperty(leader, "x");
                        
                        var x = posX + (leaderX - posX) * ease;
                        line.setAttribute("x2", leaderX - x);
                        return x;
                    },
                    y: function() {
                        let posY = gsap.getProperty(line, "y");
                        let leaderY = gsap.getProperty(leader, "y");
                        
                        var y = posY + (leaderY - posY) * ease;
                        line.setAttribute("y2", leaderY - y);
                        return y;
                    }
                    }
                });  
                
                
                return line;
            }
        }
    },
    mounted(){
        this.init()
    }
}
</script>

