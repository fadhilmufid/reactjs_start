import Chart from "./Chart"

const Dashboard = () => {
    return (
        <><div className="main__cards">
            <a href="/create-documents">
            <div className="card">
             
                <i
                    className="fa fa-user-o fa-2x text-lightblue"
                    aria-hidden="true"
                ></i>
                <div className="card_inner">
                    <div className="charts__left__title">
                        <div >
                            <h3>Documents</h3>
                            <p>Create new Docs</p>
                        </div>
                    </div>
                </div>
            </div>
            </a>

            <div className="card">
                <i
                    className="fa fa-user-o fa-2x text-lightblue"
                    aria-hidden="true"
                ></i>
                <div className="card_inner">
                    <div className="charts__left__title">
                        <div>
                            <h3>Notes</h3>
                            <p>Create new Notes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <i
                    className="fa fa-video-camera fa-2x text-yellow"
                    aria-hidden="true"
                ></i>
                <div className="card_inner">
                    <p className="text-primary-p">Number of Videos</p>
                    <span className="font-bold text-title">340</span>
                </div>
            </div>

            <div className="card">
                <i
                    className="fa fa-thumbs-up fa-2x text-green"
                    aria-hidden="true"
                ></i>
                <div className="card_inner">
                    <p className="text-primary-p">Number of Likes</p>
                    <span className="font-bold text-title">645</span>
                </div>
            </div>
        </div><div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-usd" aria-hidden="true"></i>
                    </div>
                    <Chart />
                </div>

                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Stats Reports</h1>
                            <p>Cupertino, California, USA</p>
                        </div>
                        <i className="fa fa-usd" aria-hidden="true"></i>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                        </div>

                        <div className="card2">
                            <h1>Sales</h1>
                            <p>$124,200</p>
                        </div>

                        <div className="card3">
                            <h1>Users</h1>
                            <p>3900</p>
                        </div>

                        <div className="card4">
                            <h1>Orders</h1>
                            <p>1881</p>
                        </div>
                    </div>
                </div>
            </div></>
     );
};
export default Dashboard;
