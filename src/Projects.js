import React from 'react'

const Projects = () => {
    return(
        <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
            {/* <!-- Featured Project Row--> */}
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0"  src="https://images.unsplash.com/photo-1629527251582-bda682e3e44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1046&q=80" alt="..." /></div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4>Green-BeeEater</h4>
                        <p className="text-black-50 mb-0">Captured at local premises, Green-BeeEater with a catch of Bee with perfect sunlight bringing out the vibrant colors of BeeEater</p>
                    </div>
                </div>
            </div>
            {/* <!-- Project One Row--> */}
            <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div className="col-lg-6">
                        <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1613738036342-1288a9dd0118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=350&q=60" alt="..." />
                        <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1613737678833-c971c06b1e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=450&h=338&q=60" alt="..." />
                        <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1613586023201-80da5fed2305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=306&h=229&q=60" alt="..." />
                        <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1614430498481-8699a340fae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=306&h=229&q=80" alt="..." />
                    
                </div>
                <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-left">
                                <h4 className="text-white">Historical Architecture</h4>
                                <p className="mb-0 text-white-50">Glimpses of the historical architecture at the Udaipur City Palace and Monsoon Palace Sajjanghar and the Swaminarayan temple at Gadhada Gujarat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Project Two Row--> */}
            <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
                    

                    <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1643466346621-088dbe4aa46f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=306&h=280&q=60" alt="..." />
                    <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1622627722137-e0247a4413de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=306&h=280&q=100" alt="..." />
                
                
                    <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1612595947042-22e31b2daa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="..." />
                    <img className="img-fluid col-lg-6" src="https://images.unsplash.com/photo-1635069070266-8c2012b36409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=300&h=229&q=60" alt="..." />
                
            </div>
                <div className="col-lg-6 order-lg-first">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-right">
                                <h4 className="text-white">Wildlife</h4>
                                <p className="mb-0 text-white-50">Wildlife is always fascinating and teaches us a lot of things like being in tune with nature.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects;