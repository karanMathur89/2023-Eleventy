
document.addEventListener('DOMContentLoaded', e => {
    const allIcons = document.querySelectorAll('.process svg');
    const processItems = document.querySelectorAll('.process li');
    
    //* STEP 1
    const options = {
        root: null, //defaults to the viewport
        rootMargin: "-100px 0px", //0px not 0
        threshold: 0.1// 10% in the rootMargin area
    }
    
    //* STEP 2
    const observerIcons = new IntersectionObserver(beTouching, options);
    const observerItems = new IntersectionObserver(beTouching, options);
    
    //* STEP 3
    allIcons.forEach(icon => {
        observerIcons.observe(icon);
    })
    
    processItems.forEach(item => {
        observerItems.observe(item)
    })
    
    //* STEP 4
    function beTouching(entries, observer) {
        entries.forEach(entry => {
            // console.log(entry.target.id, "Is Intersecting = ", entry.isIntersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
                observer.unobserve(entry.target) //to stop observing to save system resources
            }
            else {
                entry.target.classList.remove('active')
            }
            
        })
    }
})