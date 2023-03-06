import LoginAdminForm from '../components/register/LoginAdminForm';
// import NavBarFooter from '../layouts/NavBarFooter';
export default function LoginAdminPage() {
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/e251261f-cc87-497a-8672-194e306e76bc/TH-en-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg')]  w-full h-screen bg-center bg-cover bg-dunes ">
      <div className="bg-black/50 h-full w-full flex justify-center">
        <LoginAdminForm />
      </div>
      {/* <NavBarFooter /> */}
    </div>
  );
}
