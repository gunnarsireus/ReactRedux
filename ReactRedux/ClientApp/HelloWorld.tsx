// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';

export default class HelloWorld extends React.Component<{}, {}> {
    public render() {
        return <div>
                Hello World from tsx!
               </div>;
    }
}
