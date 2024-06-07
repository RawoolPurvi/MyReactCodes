// Validation

import PropTypes from 'prop-types'

export function HelloWorldComponent ({name}:any){
    return (
        <div>Hello,{name}</div>
    )
}
HelloWorldComponent.propTypes = {
    name:PropTypes.string
}