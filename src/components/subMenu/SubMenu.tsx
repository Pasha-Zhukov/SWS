import "./SubMenu.style.scss";

export function SubMenu() {
  return (
    <>
      <div className="sub-menu-wrapper">
        <div className="wrapper-select">
          <div>
            <div className="sub-menu-header">Название проекта</div>
            <div className="sub-menu-sub-header">Аббревиатура</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_3_4487)">
              <path
                d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_4487">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="header-content">Строительно-монтажные работы</div>
      </div>
    </>
  );
}
