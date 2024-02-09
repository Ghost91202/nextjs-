// components/ButtonComponent.js
"use client";
import React, { useState } from 'react';

const ComponentOne = () => <div>Component One Content</div>;
const ComponentTwo = () => <div>Component Two Content</div>;
const ComponentThree = () => <div>Component Three Content</div>;
const ComponentFour = () => <div>Component Four Content</div>;

const componentsMap = {
  componentOne: ComponentOne,
  componentTwo: ComponentTwo,
  componentThree: ComponentThree,
  componentFour: ComponentFour,
};

const ButtonComponent = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = (component) => {
    const Component = componentsMap[component];
    return Component ? <Component /> : null;
  };

  return (
    <div>
      <h1>Button Component</h1>
      {Object.keys(componentsMap).map((component) => (
        <div className="flex gap-10">
           <button key={component} onClick={() => setSelectedComponent(component)}>
          {`Show ${component}`}
        </button>
       </div>
      ))}

      <div style={{ marginTop: '20px' }}>{selectedComponent && renderComponent(selectedComponent)}</div>
    </div>
  );
};

export default ButtonComponent;
