import React from 'react'
import './About.scss'
import './Signature.scss' 
import avatar from '../../images/holaa1.png'

const About = () => {
    window.addEventListener('scroll', function(){
        let angle1 = document.getElementById('angle1');
        let angle2 = document.getElementById('angle2');
        let slash = document.getElementById('slash');
        let profileImg = document.getElementById('profileImg');
        let presentationText = document.getElementsByClassName('presentationText');
        let signature = document.getElementById('signature');
        let positionAngle1 = angle1.getBoundingClientRect().top; 
        let pantalla = this.window.innerHeight
        if(positionAngle1 < pantalla*0.2){
            angle1.style.animation = 'angle1 1500ms forwards';
            angle2.style.animation = 'angle2 1500ms forwards';
            slash.style.animation = 'slash 1500ms forwards';
            profileImg.style.animation = 'profileImage 1500ms ease forwards';
            for(let i=0; i<presentationText.length; i++){
                presentationText[i].style.animation = 'profileImage 1500ms ease forwards';
            };
        }
        if (positionAngle1 < 0){
            signature.style.display = 'block';
        }
    })

    return (
    <section className='about' id='about'>
        <p className="angle angle1" id='angle1'>&#60;</p>
        <div className="profile">
            <img src={avatar} alt="image" id='profileImg' className='profileImg' />
        </div>
        <p className="slash" id='slash'>&#47;</p>
        <div className="presentation">
            <div className="textGroup">    
                <h3 className='presentationText'> 
                    My name is Abril and I'm a frontend developer
                </h3>
                <h3 className='presentationText'>
                    Since I discovered the passion for web development I have been in constant training to improve day by day.
                </h3>
                <h3 className='presentationText'>
                    I hope you enjoy my work, thanks for your visit
                </h3>
            </div>
            <div className="signature">
                <svg id="signature" width="474" height="227" viewBox="0 0 474 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="a-1" d="M10.3512 178.065C12.3174 176.099 14.8133 172.706 16.5 170.5C16.5 170.5 19.7089 166.736 21 165C25.1706 159.391 28.1898 155.42 32.4278 149.843C42.7229 136.297 53.2045 122.726 64.6508 110.105C79 96.5 93.7166 78.8693 109.939 64.8527C118.059 57.8375 126.305 50.9565 134.413 43.9294C140.566 38.597 145.676 34.0394 152 29C156.597 25.3369 160.8 21.9376 165.5 18.3746C168.862 15.8256 173.399 13.1989 177 11C182.091 7.89156 188.162 5.8854 193.957 4.67803C196.652 4.1166 199.703 3.55749 202.067 5.3088C205.772 8.05333 205.342 14.4444 204.77 18.3746C203.527 26.9116 199.657 35.544 196.029 43.3167C186.989 62.6881 177.081 81.6317 168.078 101.022C163.361 111.181 159.488 121.559 155.282 131.93C153.324 136.758 151.074 141.458 149.263 146.347C147.264 151.743 144.006 159.606 142 165C139.346 172.135 136.616 178.206 134.413 185.5C132.715 191.121 132.697 189 129.5 201C126.303 213 125.718 215.869 124.862 219C124.005 222.131 124 222.241 124 225.5" stroke="black" strokeWidth="3" strokeLinecap="round"/>

                    <path id="a-2" d="M1.72659 123.056C20.376 119.773 38.6782 114.561 56.8065 109.168C69.6498 105.347 82.5645 101.872 95.6996 99.226C110.895 96.1649 126.747 95.112 142.212 94.28C157.575 93.4535 172.672 94.1477 187.974 95.4291C192.326 95.7935 196.704 95.6605 201.063 95.9786" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    
                    <path id="b" d="M270.61 2.38416C269.91 4.50608 269.638 6.74281 268.889 8.83778C267.89 11.6357 266.717 14.3156 265.579 17.0602C264.317 20.1031 262.192 22.8669 260.619 25.7606C259.593 27.648 258.318 29.3282 257.177 31.1387C255.737 33.4238 254.414 35.8779 252.708 37.9747C250.879 40.2215 249.372 42.7218 247.831 45.1693C246.257 47.6705 244.465 49.9319 242.836 52.3759C240.109 56.4661 237.459 60.4982 234.554 64.4704C227.309 74.3759 220.184 84.4012 214.464 95.2686C210.075 103.608 205.627 111.912 201.796 120.533C199.727 125.187 198.476 129.972 196.776 134.731C196.564 135.326 196.139 135.953 195.975 136.524C195.843 136.987 196.433 136.485 196.513 136.369C197.312 135.207 198.174 134.088 198.939 132.903C200.736 130.118 202.306 127.176 204.114 124.394C206.018 121.464 208.162 118.866 210.508 116.267C216.543 109.58 223.764 104.133 231.148 99.0212C235.188 96.2243 238.941 93.0119 243.374 90.8227C247.149 88.9582 251.272 87.1262 255.361 86.0662C258.641 85.2156 260.9 85.283 264.145 86.0662C265.914 86.4933 269.316 87.5966 270.228 89.3886C272.989 94.8114 267.291 99.167 264.145 102.75C260.964 106.372 257.089 109.393 253.544 112.646C250.145 115.763 246.168 117.949 242.214 120.27C239.245 122.014 236.411 123.917 233.43 125.636C231.207 126.919 227.017 129.449 224.5 130C220.141 130.953 217.967 132.109 213.842 133.656C211.987 134.352 209.575 135.329 207.58 135.329" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    
                    <path id="r" d="M294.489 84.9906C295.303 86.9848 295.588 87.6595 295.027 89.5918C294.542 91.2618 293.974 92.8245 293.246 94.4081C291.48 98.2463 289.449 102.076 287.222 105.666C284.576 109.932 281.851 114.142 279.096 118.334C277.104 121.365 275.759 124.842 273.837 127.931C272.853 129.513 271.596 131.479 271.041 133.285C270.938 133.619 270.072 135.351 270.873 134.253C277.512 125.156 284.961 116.695 293.353 109.156C299.12 103.975 305.035 99.0565 310.946 94.0496C313.268 92.0822 322.946 86.2388 325.586 84.7635M325.586 84.7635C328.009 83.4095 323.213 86.2077 325.586 84.7635ZM325.586 84.7635C330.138 81.9925 334.81 80.0075 339.748 78.0111C341.411 77.3388 344.391 75.872 346.333 76.6487C348.05 77.3356 349.129 78.2369 349.129 80.1623C349.129 81.764 348.299 84.0853 347.409 85.4208" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    
                    <path id="i" d="M370.602 89.1608C367.788 91.2295 365.523 93.5535 363.308 96.228C361.258 98.7022 358.795 100.812 356.947 103.447C355.512 105.493 353.68 107.198 352.202 109.201C350.627 111.337 349.26 113.568 347.936 115.865C345.608 119.904 341.546 127.311 346.624 130.958C350.783 133.946 357.45 131.428 361.617 129.772C367.482 127.44 372.91 123.813 378.477 120.862C382.5 118.73 386.686 116.043 390.5 113.5C394.536 110.809 398 107.5 401.723 105.744" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    
                    <path id="l" d="M472.5 18C465.319 25.2688 461.016 30.6737 454.5 38.5C449.505 44.5 429.573 69 422 81C415.085 89.3181 417.249 88.1055 411.541 97.2881C406.582 105.267 401.466 113.103 397.432 121.619C395.189 126.356 391.526 135.863 399.111 138.177C403.002 139.364 406.96 137.476 410.405 135.905C415.567 133.552 420.731 130.744 425.348 127.437C429.664 124.345 434.224 121.627 438.573 118.591C444.885 114.185 450.715 108.984 456.696 104.153" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    
                    <path id="heart" d="M380.875 57.6361C383.07 60.9293 382.963 63.3649 383 67.5C384.453 64.5945 397.235 59.7145 397.407 64.3499C397.488 66.5315 395.852 68.4003 394 69.3979C389.132 72.019 383.93 75.0514 378.654 76.7932C375.557 77.8153 376.246 75.9285 376.281 73.9159C376.365 69.0521 374.032 64.2235 374.918 59.4281C375.431 56.6547 378.952 54.7523 380.875 57.6361Z" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                </svg>   
            </div>
        </div>    
        <p className="angle angle2" id='angle2'>&#62;</p>
    </section>
  )
}

export default About