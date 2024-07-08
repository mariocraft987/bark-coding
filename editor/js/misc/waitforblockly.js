const waitfor = () => new Promise((resolve) =>{
    function setup() {
        setTimeout(() => {
            if (window.workspace) {
                resolve();
            } else {
                setup();
            }
        }, 1);
    }
    setup();
});

export default waitfor;