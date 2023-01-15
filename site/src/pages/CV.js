export default function CV() {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Matias Haapasalmi.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h1>CV</h1>
                <h3>Click on below button to download my CV as a PDF file</h3>
                <button onClick={onButtonClick}>
                    Download CV
                </button>
            </center>
        </>
    );
};
