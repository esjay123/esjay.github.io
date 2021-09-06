import React from 'react'


export default function Homepage() {
    return (
        <div className="page__homepage">
            <div className="page__dividedsection page__section red_background">
                <div className="page__subsection">
                    <div className="inner-content"> 
                        <div className="page__title">
                            <h1>Software <br/> Developer.</h1>
                        </div>
                        <div className="page__subtitle">
                            <h5>My name is Esjay Suk Jin Hong and I love solving problems and building software</h5>
                        </div>
                    </div>
                </div>
                <div className="page__subsection">
                    <img src="img/profile.png" />
                </div>
            </div>
            <div className="page__section pink_background"></div>  
            <div className="page__section yellow_background"></div>  
        </div>
    )
}
