import React from 'react';

export default (loader) => {
  return class extends React.Component {
    state = { component: null };

    componentDidMount() {
      this.mounted = true;
      
      loader().then((component) => {
        if (this.mounted) {
          this.update(component);
        }
      });
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    mounted = false;

    update(component) {
      this.setState({ component: component.default || component });
    }

    render() {
      const Component = this.state.component;

      if (Component) {
        return <Component {...this.props} />;
      }

      return <div>Loading...</div>;
    }
  };
};
