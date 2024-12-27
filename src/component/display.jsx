import h from "./style.module.css";

function Display() {
    return (
        <>
            {/* Welcome Heading */}
            <div className={h.welcomeSection}>
                <h1 className={h.welcomeText}>Welcome to</h1>
                <h1 className={h.welcomeText}>
                    Sundaragiri and Its Dairy's Farms
                </h1>
            </div>

            {/* Full-Width Image */}
            <img
                className={h.fullWidthImage}
                style={{width:"100%"}}
                src="https://png.pngtree.com/back_origin_pic/04/33/67/7b1e67e451b0076c234a5725318b1001.jpg"
                alt="Dairy Farm"
            />

            {/* About Us Section */}
            <div className={h.aboutSection}>
                <h1 className={h.aboutHeading}>ABOUT US</h1>
                <div className={h.aboutText}>
                    <h3>We are a group of family members working</h3>
                    <h3>as full-time farmers around Sundaragiri</h3>
                    <h3>with a common vision to</h3>
                    <h3>deliver good quality food to</h3>
                    <h3>our present and future generations.</h3>
                </div>
            </div>
        </>
    );
}

export default Display;
