//1.내비게이션 영역인 Nav bar 기본 구조를 생성하세요.
//2. `<nav>...</nav> `내에 내비게이션 바의 총 3가지 요소들(인스타그램 로고, 검색창, 상단 메뉴 탭)을 구성하세요.

const Nav = () => (
    <nav>
        <a href="#" className="logo">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
        </a>
        <span class="nav-links">
            <a href="#"><i className="fas fa-home"></i></a>
            <a href="#"><i className="fa fa-plus-square"></i></a>
        </span>
    </nav>);

export default Nav;
