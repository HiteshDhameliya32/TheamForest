import React from 'react'

// Layout & Components
import Layout from "@/layouts/Layout";
import Button from '@/components/FormsElements/Buttons/Button';
import InputButton from '@/components/FormsElements/Buttons/InputButton';
import { Card1, CardHeader1 } from '@/components/Cards/Card';
import LinkButton from '@/components/FormsElements/Buttons/LinkButton';

// Data
const btnsData = ['primary','secondary','info', 'success','warning', 'danger','light','dark','link'];
function Buttons() {
  
  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-6">
                <Card1 className="card border">
                    <CardHeader1 title={"Default Buttons"}>
                        Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
                    </CardHeader1>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                        {btnsData.map((cl,i)=><Button 
                        key={`${cl + i}`} 
                        title={cl[0].toUpperCase() + cl.slice(1)}
                        color={cl}
                        />)}
                    </div>
                </Card1>
            </div>
            <div className="col-lg-6">
                <Card1 >
                <CardHeader1 title='Rounded Buttons'>
                    Add <code>.btn-rounded</code> to default button to get rounded corners.
                </CardHeader1>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                    {btnsData.map((cl,i)=><Button 
                    key={`${cl + i}`} 
                    title={cl[0].toUpperCase() + cl.slice(1)}
                    color={cl}
                    rounded = {true}
                    />)}
                    </div>
                </Card1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <Card1>
                <CardHeader1 title='Button tags'>
                    The <code className="highlighter-rouge">.btn</code> classes are designed to be used with the <code className="highlighter-rouge">&lt;button&gt;</code> element. However, you can also use these classes on <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).
                </CardHeader1>
                <div className="d-flex flex-wrap align-items-center gap-2">
                    <LinkButton title="Link" color="primary" />
                    <Button title="Button" color="primary" type="submit"/>
                    <InputButton color="primary" type="button" value="Input"/>
                    <InputButton color="primary" type="submit" value="Submit"/>
                    <InputButton color="primary" type="reset" value="Reset"/>
                </div>
                </Card1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">
            <Card1>
                <CardHeader1 title="Sizes">
                    Fancy larger or smaller buttons? Add <code className="highlighter-rouge">.btn-lg</code> or <code className="highlighter-rouge">.btn-sm</code> for additional sizes.
                </CardHeader1>
                <div className="d-flex flex-wrap align-items-center gap-2">
                    <Button color="primary" size="lg" title="Large button"/>
                    <Button color="secondary" size="lg" title="Large button"/>
                    <Button color="primary" size="sm" title="Small button"/>
                    <Button color="secondary" size="sm" title="Small button"/>
                </div>
            </Card1>
            </div>
            <div className="col-lg-6">
                <Card1>
                <CardHeader1 title="Disabled Buttons">  
                    Make buttons look inactive by adding the <code className="highlighter-rouge">disabled</code> boolean attribute to any <code className="highlighter-rouge">&lt;button&gt;</code> element.
                </CardHeader1>
                <div className="d-flex flex-wrap align-items-center gap-2">
                    <Button color="primary" size="lg" title="Small button" disabled={true}/>
                    <Button color="secondary" size="lg" title="Button" disabled/>
                </div>
                </Card1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <Card1>
                    <CardHeader1 title="Disabled Link">
                        Disabled buttons using the <code className="highlighter-rouge">&lt;a&gt;</code> element behave a bit different:
                    </CardHeader1>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <LinkButton href="#" color="primary" size="lg" disabled={true} tabIndex="-1" aria-disabled={false} title="Primary link"></LinkButton>
                        <LinkButton href="#" color="secondary" size="lg" disabled={true} tabIndex="-1" role="button" aria-disabled="true" title="Link"></LinkButton>
                    </div>
                </Card1>
            </div>

            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Button Width">
                        Create buttons with minimum width by adding add <code>.w-xs</code>, <code>.w-sm</code>, <code>.w-md</code> or <code>.w-lg</code>.
                    </CardHeader1>
                        <div className="d-flex flex-wrap align-items-center gap-2">
                            <Button color="primary" width="xs" title="Xs"/>
                            <Button color="light" width="sm" title="Small"/>
                            <Button color="dark" width="md" title="Middle"/>
                            <Button color="secondary" width="md" title="Large"/>
                        </div>
                </Card1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <Card1>
                    <CardHeader1 title="grids Button">
                        Create block level buttons,with by adding add <code>.d-grid</code>.                        
                    </CardHeader1>
                        <div className="d-grid flex-wrap align-items-center gap-2">
                            <Button color="primary"  title="Block Button" size="lg"/>
                            <Button color="dark"  title="Block Button" />
                            <Button color="light"  title="Block Button" size="sm"/>
                        </div>
                </Card1>
            </div>

            <div className="col-lg-6">
                <Card1 className="mb-0">
                    <CardHeader1 title="Social Buttons">
                        Use class <code>.btn-@yoursocial</code> to the parent.
                    </CardHeader1>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                        <Button color="primary" title="Facebook" social="facebook"/>
                        <Button color="info" title="Twitter" social="twitter"/>
                        <Button color="success" title="Linkedin" social="linkedin" />
                        <Button color="danger" title="Dribbble" social="dribbble" />
                        <Button color="warning" title="Google+" social="googleplus" />
                        <Button color="danger" title="Instagram" social="instagram" />
                        <Button color="primary" title="Skype" social="skype" />
                        <Button color="danger" title="Youtube" social="youtube" />
                        <Button color="dark" title="Github" social="github" />
                    </div>

                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <Button color="primary"  social="facebook"/>
                        <Button color="info" social="twitter"/>
                        <Button color="success" social="linkedin" />
                        <Button color="danger" social="dribbble" />
                        <Button color="warning" social="googleplus" />
                        <Button color="danger" social="instagram" />
                        <Button color="primary" social="skype" />
                        <Button color="danger" social="youtube" />
                        <Button color="dark" social="github" />
                    </div>
                </Card1>
            </div>
        </div>
    </div>
  );
}

export default Buttons

Buttons.getLayout = function getLayout(page) {
  return <Layout  dataCurrentPage="ui-buttons"  title="Button" breadcrumb="Fadmin / Elements" description="A Responsive Bootstrap Admin Template">{page}</Layout>;
};