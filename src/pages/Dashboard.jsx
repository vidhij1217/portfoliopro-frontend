import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="container py-5">
        <motion.div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/create-portfolio" className="btn create-portfolio-btn">
            Create Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
