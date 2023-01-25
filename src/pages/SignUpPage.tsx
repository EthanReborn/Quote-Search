
import {FormInput} from '../components/FormInput'

export const SignUpPage = () => {
    return (
        <main>
            <h2>SignUP</h2>
            <form>
                <FormInput type="password" label="label prop goes here"/>
                <FormInput label="something else" />
            </form>
        //add button here
        <button> button </button>
        </main>
    )
}