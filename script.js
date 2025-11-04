let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')
let newLink = document.querySelectorAll('ul li a')

// console.log(window);
// console.log(section);

window.onscroll = () => {
    // console.log(window);
    
    section.forEach(sec => {

        // console.log(sec);
        
        let top = window.scrollY;

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute('id')

        if (top > offset && top < offset + height) {

            navLink.forEach(links => {

                links.classList.remove('active')

                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
                // document.querySelector('.links .lnk a[href*=' + id + ']').classList.add('active')

            })
            newLink.forEach(links => {

                links.classList.remove('active')

                // document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active')

            })

        }

    })

}