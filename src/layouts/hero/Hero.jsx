
const Hero = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/9gQqznj/bg-1.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-white">
                            <p className="mb-5 text-3xl">Hi, I’m Imon Chowdhury</p>
                            <h1 className="mb-5 text-5xl font-bold leading-tight">Web Application Developer</h1>
                            <a href="https://drive.google.com/file/d/10GVQgXy3RodWUC1gp-P-f3jMWqw996hB/view?usp=sharing" target="_blank"><button className="btn btn-secondary">My Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;