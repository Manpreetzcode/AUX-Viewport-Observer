
// Author Name: Manpreet Singh
// About code: This code for The auxObserver class is a custom JavaScript utility designed to track when specific sections of a webpage enter or exit the viewport. It acts similarly to the native IntersectionObserver API but gives more fine-grained manual control by using scroll positions, offsets, and optional debugging visuals.

class auxObserver {
    constructor({
        secId,
        offset: {
            scrollOffset,
            xOffset,
            yOffset
        } = {}, 
        viewport: { onEnter, onExit },
        graphs = false, 
    }) {
        this.secId = secId;
        this.scrollOffset = scrollOffset;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        const sectionEls = document.querySelectorAll(secId);
        sectionEls.forEach((section) => {
            let sectionStatus = {
                inViewport: false,
                outViewport: false
            };
            // Controls  
            let _scrollOffset = scrollOffset || 0;
            let startOffset = xOffset || 0;
            let endOffset = yOffset || 0;
            // Base values
            let scrollVal = 0 + _scrollOffset;
            let secStart = section.offsetTop + startOffset;
            let secEnd = (section.offsetTop + section.offsetHeight) - endOffset;
            let prevInView = false;

            // Update values on scroll
            window.addEventListener("scroll", () => {
                scrollVal = Math.floor(window.scrollY) + _scrollOffset;
                secStart = section.offsetTop + startOffset;
                secEnd = (section.offsetTop + section.offsetHeight) - endOffset;
            });

            // Check viewport state
            window.addEventListener("scroll", () => {
                const inView = scrollVal >= secStart && scrollVal <= secEnd;

                sectionStatus.inViewport = inView;
                sectionStatus.outViewport = !inView;

                if (inView !== prevInView) {
                    if (sectionStatus.inViewport) {
                        onEnter && onEnter(section);
                    }
                    if (sectionStatus.outViewport) {
                        onExit && onExit(section);
                    }
                }
                prevInView = inView;
            });
            if(graphs){
            // ------- Markers -------
            var scrollMark = section.querySelector( ".scrollMark");
            var secMStart = section.querySelector(".secStart");
            var secMEnd = section.querySelector( ".secEnd");
            scrollMark.style.top = scrollVal + "px";
            secMStart.style.top = secStart + "px";
            secMEnd.style.top = secEnd + "px";

            window.addEventListener("scroll", () => {
            scrollMark.style.top = scrollVal + "px";
            secMStart.style.top = secStart + "px";
            secMEnd.style.top = secEnd + "px";
            })
            }
        });
    }
}



