const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")


buttons.forEach(function (button) {
    // console.log(button)
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'red') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'green') {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === 'purple') {
        //     body.style.backgroundColor = e.target.id
        // }

        // use of switch case

        switch (e.target.id) {
            case e.target.id:
                body.style.backgroundColor = e.target.id
                break;

            default:
                break;
        }


    })
})

