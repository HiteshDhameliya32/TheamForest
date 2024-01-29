import React from "react";

// Layout & Components
import Layout from "@/layouts/Layout";
import { Card1, CardHeader1 } from "@/components/Cards/Card";

// Data

function Typograghy() {
  return (
    <div className="container-fluid" id="main-wrapper">
      <div className="row">
        <div className="col-lg-6">
          <Card1>
            <CardHeader1 title="Headings">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <h1>
                h1. Bootstrap heading{" "}
                <small className="text-muted">Secondary text</small>
              </h1>
              <h2>
                h2. Bootstrap heading{" "}
                <small className="text-muted">Secondary text</small>
              </h2>
              <h3>
                h3. Bootstrap heading{" "}
                <small className="text-muted">Secondary text</small>
              </h3>
              <h4>
                h4. Bootstrap heading{" "}
                <small className="text-muted">Secondary text</small>
              </h4>
              <h5>
                h5. Bootstrap heading{" "}
                <small className="text-muted">Secondary text</small>
              </h5>
              <h6>
                h6. Bootstrap heading{" "}
                <small className="text-muted">Secondary text</small>
              </h6>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Marked text">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <p>
                You can use the mark tag to <mark>highlight</mark> text.
              </p>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Deleted text">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <p>
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Strikethrough text">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <p>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </p>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Inserted text">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <p>
                <ins>
                  This line of text is meant to be treated as an addition to the
                  document.
                </ins>
              </p>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Underlined text">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <p>
                <u>This line of text will render as underlined.</u>
              </p>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Transformation classes">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <p className="text-lowercase">Lowercased text.</p>
              <p className="text-uppercase">Uppercased text.</p>
              <p className="text-capitalize">Capitalized text.</p>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Abbreviations">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              An abbreviation of the word attribute is{" "}
              <abbr title="attribute">attr.</abbr>
            </div>
            <div>
              An abbreviation of the word attribute is{" "}
              <abbr title="HyperText Markup Language" className="initialism">
                HTML
              </abbr>
            </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Blockquote options">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </blockquote>
          </Card1>

          <Card1>
            <CardHeader1 title="Blockquote Reverse">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <figure className="text-end">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </Card1>

          <Card1>
            <CardHeader1 title="Ordered List">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
            </ol>
          </Card1>

          <Card1>
            <CardHeader1 title="Unstyled List">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card1>

          <Card1>
            <CardHeader1 title="Inline List">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
            </ul>
          </Card1>

          <Card1>
            <CardHeader1 title="User Input" >
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
            To switch directories, type <kbd>cd</kbd> followed by the name
            of the directory.
            <br />
            To edit settings, press{" "}
            <kbd>
              <kbd>ctrl</kbd> + <kbd>,</kbd>
            </kbd>
          </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Variables">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
            <div>
              <var>y</var> = <var>m</var><var>x</var> + <var>b</var> 
            </div>
          </Card1>
        </div>
        <div className="col-lg-6">
          <Card1>
            <CardHeader1 title="Body copy">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <p>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nullam id dolor id nibh ultricies
                  vehicula.
                </p>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec ullamcorper nulla non metus
                  auctor fringilla. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula, eget lacinia odio sem nec elit. Donec
                  ullamcorper nulla non metus auctor fringilla.
                </p>
              </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Lead body copy">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <p className="lead">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Cum
                  sociis natoque penatibus et magnis dis parturient montes mus.
                  Nullam id dolor id nibh ultricies vehicula.
                </p>
              </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Small text">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
              </div>
          </Card1>

          <Card1>
            <CardHeader1 title="Bold text">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <p>
                  The following snippet of text is{" "}
                  <strong>rendered as bold text.</strong>
                </p>
              </div>
          </Card1>

          <Card1 className="card border">
            <CardHeader1 title="Italics text">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <p>
                  The following snippet of text is{" "}
                  <em>rendered as italicized text.</em>
                </p>
              </div>
          </Card1>

          <Card1 className="card border">
            <CardHeader1 title="Alignment classes">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <p className="text-start">Left aligned text.</p>
                <p className="text-center">Center aligned text.</p>
                <p className="text-end">Right aligned text.</p>
                <p className="text-justify">Justified text.</p>
                <p className="text-nowrap">No wrap text.</p>
              </div>
          </Card1>

          <Card1 className="card border">
            <CardHeader1 title="Addresses">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <address>
                  <strong>Twitter, Inc.</strong>
                  <br />
                  1355 Market Street, Suite 900
                  <br />
                  San Francisco, CA 94103
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
              </div>
          </Card1>

          <Card1 >
            <CardHeader1 className="Default blockquote">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                </blockquote>
              </div>
          </Card1>

          <Card1 className="card border">
            <CardHeader1 className="Unordered List">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </div>
          </Card1>

          <Card1 className="card border">
            <CardHeader1 title="Description List">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <dl>
                  {" "}
                  <dt>Description lists</dt>
                  <dd>
                    A description list is perfect for defining terms.
                  </dd>{" "}
                  <dt>Euismod</dt>
                  <dd>
                    Vestibulum id ligula porta felis euismod semper eget lacinia
                    odio sem nec elit.
                  </dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>{" "}
                  <dt>Malesuada porta</dt>
                  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                </dl>
              </div>
          </Card1>

          <Card1 >
            <CardHeader1 title="Horizontal description">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <dl className="row">
                <dt className="col-sm-3">Description lists</dt>
                <dd className="col-sm-9">
                  A description list is perfect for defining terms.
                </dd>

                <dt className="col-sm-3">Term</dt>
                <dd className="col-sm-9">
                  <p>Definition for the term.</p>
                  <p>And some more placeholder definition text.</p>
                </dd>

                <dt className="col-sm-3">Another term</dt>
                <dd className="col-sm-9">
                  This definition is short, so no extra paragraphs or anything.
                </dd>

                <dt className="col-sm-3 text-truncate">
                  Truncated term is truncated
                </dt>
                <dd className="col-sm-9">
                  This can be useful when space is tight. Adds an ellipsis at
                  the end.
                </dd>

                <dt className="col-sm-3">Nesting</dt>
                <dd className="col-sm-9">
                  <dl className="row">
                    <dt className="col-sm-4">Nested definition list</dt>
                    <dd className="col-sm-8">
                      I heard you like definition lists. Let me put a definition
                      list inside your definition list.
                    </dd>
                  </dl>
                </dd>
              </dl>
          </Card1>

          <Card1 >
            <CardHeader1 title="Inline Code">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                For example, <code>&lt;section&gt;</code> should be wrapped as
                inline.
              </div>
          </Card1>

          <Card1 className="mb-0">
            <CardHeader1 title="Basic block">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient monte.
            </CardHeader1>
              <div>
                <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
              </div>
          </Card1>

        </div>
      </div>
    </div>
  );
}

export default Typograghy;

Typograghy.getLayout = function getLayout(page) {
  return (
    <Layout
      dataCurrentPage="ui-typography"
      title="Typography"
      breadcrumb="Fadmin / Elements"
      description="A Responsive Bootstrap Admin Template"
    >
      {page}
    </Layout>
  );
};
