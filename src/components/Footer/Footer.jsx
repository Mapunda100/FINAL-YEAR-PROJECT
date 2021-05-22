import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <div className="container-fluid mt-5">
                <footer class="footer pt-0">
                    <div class="row align-items-center justify-content-lg-between">
                        <div class="col-lg-6">
                            <div class="copyright text-center  text-lg-left  text-muted">
                                © 2021 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank" rel="noreferrer" >Change Supply inc</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noreferrer" >About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noreferrer" >Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/license" class="nav-link" target="_blank" rel="noreferrer" >License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    )
}
