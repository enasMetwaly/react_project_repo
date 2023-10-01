import React from 'react';
import './search.css'

export default function Search() {
    return(
        <>
        <div className='mySearch mt-3'>
        <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-12">
                            <form class="">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                    </div>
                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="search movie" style={{width:"100%"}}/>
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-lg " type="submit"style={{backgroundColor:"yellow",color:"blue"}}>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>            
        </>
    )
}
