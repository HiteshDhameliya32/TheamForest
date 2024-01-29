
// Layout & Components
import Layout from "@/layouts/Layout";
import {Card1,CardHeader1} from '@/components/Cards/Card';       
import Input from '@/components/FormsElements/Input';
import Button from '@/components/FormsElements/Buttons/Button';
import CheckBox from '@/components/FormsElements/CheckBox';
import Select from '@/components/FormsElements/Select'
import InputGroup from '@/components/FormsElements/InputGroup';
import Column from '@/components/Column';

function FormElements() {
  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-6">
                <Card1>
                    <CardHeader1 title="Basic Form">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                    <div>
                        <form>
                            <Input id="exampleInputEmail1" label="Email address" placeholder="Email" isRequired={true}/>
                            <Input id="exampleInputPassword1" label="Password" placeholder="Password" isRequired={true}/>
                            <CheckBox id="checkbox" label="Check me out" />
                            <Button type="submit" color="primary" title="Submit"/>
                        </form>
                    </div>
                </Card1>
            </div>
            <div className="col-lg-6">
                <Card1>
                    <CardHeader1 title="Horizontal form">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <form className="form-horizontal">
                                <Input id="inputEmail3" label="Email" type="email"placeholder="Email" isRequired={true} isHorizontal={true}/>
                                <Input id="inputPassword3" label="Password" type="password"placeholder="Password" isRequired={true} isHorizontal={true}/>
                                <Input id="exampleInputPassword2" label="Re-Password" type="password"placeholder="Re-Password" isRequired={true} isHorizontal={true}/>
                                <div className="form-group">
                                    <div className="row justify-content-end">
                                        <div className="col-sm-offset-3 col-sm-9">
                                            <Button type="submit" color="primary" title="Sign in"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                </Card1>
                
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <Card1>
                    <CardHeader1 title="Inline form">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <form className="form-inline">
                                <Input id="exampleInputEmail3"  placeholder="Email" isRequired={true}/>
                                <Input id="exampleInputPassword3"  placeholder="Password" isRequired={true}/>
                                <CheckBox id="checkbox-2" label="Remember me" />
                                <Button type="submit" color="primary" title="Submit"/>
                            </form>
                        </div>
                </Card1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <Card1 className="mb-0">
                    <CardHeader1 title="Form Elements">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <form className="form-horizontal">
                                <Input id="input-Default" label="Default" isRequired={true} isHorizontal={true}/>
                                <Input id="input-help-block" label="Help Block" isRequired={true} isHorizontal={true} helpBlock="Example block-level help text here."/>
                                <Input id="input-palce-holder" label="Placeholder" placeholder="palceholder" isRequired={true} isHorizontal={true}/>
                                <Input id="input-rounded" label="Rounded Input"  isRequired={true} isHorizontal={true}/>
                                <Input id="input-disabled" label="Disabled Input" placeholder="You can't type here..."  isHorizontal={true} isDisabled={true}/>
                                <Input id="input-readonly" label="ReadOnly Input" placeholder="This is readonly input..."  isHorizontal={true} isReadOnly={true}/>
                                    
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-sm-2 control-label">Static Control</label>
                                        <div className="col-sm-10">
                                            <p className="form-control-static">email@example.com</p>
                                        </div>
                                    </div>
                                </div>

                                <Input id="input-password" label="Password"  placeholder="Password"  isHorizontal={true}/>
                                <Input className="has-success" id="input-success" label="Input with success"  isHorizontal={true}/>
                                <Input className="has-warning" id="input-warning" label="Input with warning"  isHorizontal={true}/>
                                <Input className="has-error" id="input-error" label="Input with error"  isHorizontal={true}/>
                                
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-sm-2 control-label">Checkboxes</label>
                                        <div className="col-sm-10">
                                            <CheckBox label="Default checkbox" id="flexCheckDefault"/>
                                            <CheckBox label="Checked checkbox" id="flexCheckChecked" isChecked={true}/>
                                            <CheckBox label="Disabled Checked checkbox" id="flexCheckChecked" isChecked={true} isDisabled={true}/>
                                            <CheckBox label="Disabled checkbox" id="flexCheckChecked" isDisabled={true}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <Select options={[1,2,3,4,5]} label="Select"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-sm-2 control-label">Control sizing</label>
                                        <div className="col-sm-10">
                                            <InputGroup size="large" label="Large" />
                                            <InputGroup size="default" label="Default" /> 
                                            <InputGroup size="small" label="Small" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-sm-2 control-label">Column sizing</label>
                                        <div className="col-sm-10">
                                            <div className="row">
                                                <Column size={2}>
                                                    <Input placeholder={`.col-md-2`}/>
                                                </Column>

                                                <Column size={3}>
                                                    <Input placeholder={`.col-md-3`} />
                                                </Column>

                                                <Column size={4}>
                                                    <Input placeholder={`.col-md-4`} />
                                                </Column>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-sm-2 control-label">Input groups</label>
                                        <div className="col-sm-10">
                                            <InputGroup  label="@" placeholder="Ussername"/>
                                            <InputGroup  label=".00" align="right"/>
                                            <InputGroup  label2=".00" align="both" label="$"/>
                                            <InputGroup  label={<input type="checkbox" aria-label="..."/> } placeholder="With chechbox"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-sm-2 control-label">Button addons</label>
                                        <div className="col-sm-10">
                                            <div className="input-group mb-3">
                                                <button className="btn btn-primary" type="button" id="button-addon1">Go!</button>
                                                <input type="text" className="form-control border" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                            </div>
                                            <InputGroup label="Go!"  placeholder="With btn" isButton={true}/>
                                            
                                            <InputGroup label={
                                            <>
                                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                        <li><hr className="dropdown-divider"/></li>
                                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                    </ul>
                                                </>
                                            }/>
                                            <InputGroup align="right" label={
                                            <>
                                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                        <li><hr className="dropdown-divider"/></li>
                                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                    </ul>
                                                </>
                                            }/>
                                            <div className="input-group mb-3">
                                                <button type="button" className="btn btn-outline-primary">Action</button>
                                                <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span className="visually-hidden">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                </ul>
                                                <input type="text" className="form-control border" aria-label="Text input with segmented dropdown button"/>
                                            </div>
                                                
                                            <div className="input-group">
                                                <input type="text" className="form-control border" aria-label="Text input with segmented dropdown button"/>
                                                <button type="button" className="btn btn-outline-primary">Action</button>
                                                <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span className="visually-hidden">Toggle Dropdown</span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                </Card1>
            </div>
        </div>
    </div>
  );
}

export default FormElements

FormElements.getLayout = function getLayout(page) {
  return (
    <Layout  
        dataCurrentPage="maps"  
        title="Vector Maps" 
        breadcrumb="Fadmin" 
        description="A Responsive Bootstrap Admin Template">
            {page}
    </Layout>
  );
};