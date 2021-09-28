import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const [userStat, setUserStat] = useState([]);
  const [newUser, setNewUser] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  //GET USER STATISTIC
  const getUserStat = async () => {
    try {
      const res = await axios.get(
        "/users/stat",
        {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          }
        }
      );
      const dataList = res.data.sort(function (a, b) {
        return a._id - b._id
      })

      dataList.map((item) => setUserStat((prev) =>
        [
          ...prev, {
            name: MONTHS[item._id - 1],
            "New Users": item.total,
          }
        ]
      ))

    } catch (error) {
      console.log(error);
    }
  }

  //GET NEW USER LIST 
  const getNewUserList = async () => {
    try {
      const res = await new axios.get(
        "/users?new=true",
        {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          }
        }
      )

      setNewUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserStat();
    getNewUserList();
  }, []);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStat} title="User Analytics" grid dataKey="New Users" />
      <div className="homeWidgets">
        <WidgetSm newUser={newUser} />
        <WidgetLg />
      </div>
    </div>
  );
}
