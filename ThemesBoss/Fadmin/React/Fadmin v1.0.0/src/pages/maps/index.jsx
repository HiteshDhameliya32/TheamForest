

// react plugin for creating vector maps
import  {VectorMap}  from "react-jvectormap";

// Layout & Components
import Layout from "@/layouts/Layout";
import VectorMaps from '@/components/Maps/WorldMaps';
import { Card1, CardHeader1 } from '@/components/Cards/Card';

function DefaultMaps() {
    console.log(VectorMap);
  return (
    <div className="container-fluid" id="main-wrapper">
        <div className="row">
            <div className="col-lg-6">
                <Card1>
                    <CardHeader1 title="World Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div id="world-map-markers" className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMaps/>
                            </div>
                        </div>
                </Card1>
            </div>
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="India Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "in_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="USA Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "us_aea"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Europe Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "europe_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
            
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Germany Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "de_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Australia Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "au_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Africa  Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "africa_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
            <div className="col-lg-6">
                <Card1 >
                    <CardHeader1 title="Thailand  Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "th_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <Card1 className="mb-0">
                    <CardHeader1 title="Russia  Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "ru_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
            <div className="col-lg-6">
                <Card1 className="mb-0">
                    <CardHeader1 title="China  Map">
                        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte.
                    </CardHeader1>
                        <div>
                            <div className="vector-map-height" style={{overflow:'hidden'}}>
                                <VectorMap 
                                    map = "ch_mill"
                                    backgroundColor= 'transparent'
                                    regionStyle= {{ initial: {  fill: '#3a80e5' }   }}
                                    containerStyle = { {    width: "100%",  height: "350px"   }}
                                />
                            </div>
                        </div>
                </Card1>
            </div>
        </div>
    </div>
  );
}

export default DefaultMaps

DefaultMaps.getLayout = function getLayout(page) {
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