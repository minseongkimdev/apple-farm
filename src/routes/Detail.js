import React from 'react'

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props
        console.log(location)
        console.log(history)
        if (location.state === undefined) {
            history.push('/')
        }
    }
    render() {
        console.log('props : ' + this.props)
        const { location } = this.props
        return <span>{location.state.title}</span>
    }
    // console.log('props : ' + props);
    // return (
    // <div className="about__container">
    // <span>This is Detail Page!</span>
    // <span>- George Orwel, 1984</span>
    // </div>
    // );
}

export default Detail
