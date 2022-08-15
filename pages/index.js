import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <div className='login-user'>
        <div className='login-user__top'>
          <div className='login-user__logo' />
          <span className='login-user__title'>Who Is Watching?</span>
        </div>

        <div className='login-user__form'>
          <div className='login-user__user-box'>
            <img
              className='login-user__user-img'
              src='https://thumbs.dreamstime.com/b/user-profile-my-account-avatar-login-icon-man-male-face-smile-symbol-flat-vector-human-person-member-sign-user-profile-182815734.jpg'
            />
            <div className='login-user__user-name'>Eddie</div>
          </div>
        </div>
        <div className='login-user__buttons'>
          <button className='login-user__adult'>Add Adult</button>
          <button className='login-user__kid'>Add Kid</button>
        </div>
      </div>
    </div>
  );
}
