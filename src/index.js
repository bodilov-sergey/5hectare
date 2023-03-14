/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
// import "animate.css"

/*
 * Internal dependencies
 */
import "./styles/style.scss"
import form from "./components/form"
import runningLine from "./components/runningLine"
import nav from "./components/nav"

document.addEventListener('DOMContentLoaded', () => {
    form()
    runningLine()
    nav()
})
