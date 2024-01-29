import React from 'react'

function NavPills() {
  return (
    <div>
                        {/* Nav tabs */}
                        <ul className="nav nav-pills nav-justified mb-3" role="tablist">
                            <li className="nav-item waves-effect waves-light" role="presentation">
                                <a className="nav-link active" data-bs-toggle="tab" href="#tab25" role="tab" aria-selected="true">
                                    Tab 1
                                </a>
                            </li>
                            <li className="nav-item waves-effect waves-light" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab26" role="tab" aria-selected="false" tabIndex="-1">
                                    Tab 2
                                </a>
                            </li>
                            <li className="nav-item waves-effect waves-light" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab27" role="tab" aria-selected="false" tabIndex="-1">
                                    Tab 3
                                </a>
                            </li>
                            <li className="nav-item waves-effect waves-light" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab28" role="tab" aria-selected="false" tabIndex="-1">
                                    Tab 4
                                </a>
                            </li>
                        </ul>

                        {/* Tab panes */}
                        <div className="tab-content text-muted">
                            <div className="tab-pane active show" id="tab25" role="tabpanel">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab26" role="tabpanel">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab27" role="tabpanel">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="tab28" role="tabpanel">
                                <div className="d-flex mt-2">
                                    <div className="flex-shrink-0">
                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default NavPills