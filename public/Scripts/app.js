// IIFE -- Imediately Invoked Function Expression
// Assignment2, Oleg Gorbunov, 301093263, 10/25/2020


(function() {

    function Start() 
    {
        console.log("App Staerted...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            })
        }
    }

    window.addEventListener("load", Start);

})();

