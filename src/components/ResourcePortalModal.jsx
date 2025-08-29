import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";

const ResourcePortalModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-[400px] p-6 relative bg-grad"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3  "
            >
              ✕
            </button>

            <h2 className="text-p font-manrope font-semibold mb-4 text-center">
              Resource Portal
            </h2>

            {/* Login Form */}
            <form
              method="post"
              action="https://www.repagencyworks.com/login.php"
              className="flex flex-col gap-3"
            >
              <input type="hidden" name="databasename" value="tvg" />

              <label className="flex font-manrope flex-col gap-1 text-xl mt-3">
                Username:
                <input
                  type="text"
                  name="username"
                  className="border rounded-md px-3 focus:outline-none focus:border-0 py-2 text-black font-manrope"
                  required
                />
              </label>

              <label className="flex font-manrope  flex-col gap-1 text-xl mt-3">
                Password:
                <input
                  type="password"
                  name="password"
                  className="border rounded-md px-3 py-2 font-manrope focus:outline-none focus:border-0 text-black"
                  required
                />
              </label>

              <button
                type="submit"
                className="flex mt-3 justify-center"
              >
                <Button text={"Submit"} arrowClass={"r"}  />
              </button>

            </form>

            <div className="text-center mt-3">
              <a
                href="https://www.repagencyworks.com/v4/lostpassword.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:underline"
              >
                Lost password?
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResourcePortalModal;
