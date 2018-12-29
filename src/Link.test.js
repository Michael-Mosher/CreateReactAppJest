import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

test('Link changes the class when hovered', () => {
  const linkTested = 'http://www.facebook.com';
  const linkInnerText = 'Facebook';
  const initialClassName = 'normal';
  const alternativeClassName = 'hovered';
  const linkOuterHtml = `<a class="${initialClassName}" href="${linkTested}">${linkInnerText}</a>`;
  const linkAlternativeOuterHtml = `<a class="${alternativeClassName}" href="${linkTested}">${linkInnerText}</a>`;
  const component = shallow(
    <Link page={linkTested}>{linkInnerText}</Link>
  );
  expect(component.html()).toEqual(linkOuterHtml);

  // manually trigger the callback
  component.simulate('mouseover');
  expect(component.html()).toEqual(linkAlternativeOuterHtml);
  // re-rendering
  component.simulate('mouseout')
  expect(component.html()).toEqual(linkOuterHtml);
  // re-rendering
});

test('Link renders default src when no address supplied', () => {
    const component = renderer.create(
      <Link page="">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger MouseEnter callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger MouseLeave callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });