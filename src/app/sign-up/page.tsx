import SignUpForm from '../../container/Sign-up/SignUpForm';
import AuthHeader from '../../components/Layout/AuthHeader';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <SignUpForm />
      <AuthHeader/>
    </div>
  );
}
