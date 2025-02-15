import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    

    // const shortquiz = () => {
    //     console.log("shortquiz");
    //     setTimer(600);
    //     startQuiz();
    // };
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>AZ 900 Practice Questions</h1>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
                        {/* <input type="button" onClick={shortquiz()} className="btn px-4 py-2 bg-light text-dark fw-bold" value="Start Quiz" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
