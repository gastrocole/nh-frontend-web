import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux'

const LoginMessages = ({errorMessages}) => {
    return (
        errorMessages !== null && 
        errorMessages.length > 0 && 
        (<Message error>
            <Message.Header>
                Login Failed
            </Message.Header>
            <Message.List>
            {errorMessages.map((error) => (
            <Message.Item key={error.id}>
                {error.message}
            </Message.Item>
            ))}
            </Message.List>
        </Message>)
    )
}

LoginMessages.propTypes = {
    errorMessages: PropTypes.array
}

const mapStateToProps = (state) => ({
    errorMessages: state.loginMessages.errors,
})

export default connect(mapStateToProps)(LoginMessages)

