import db from "../config/database.js";

export const insertUser = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("INSERT INTO kullanıcı SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};

export const showUserInfo = (username, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query(
      "SELECT * FROM kullanıcı WHERE username = ?",
      [username],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results[0]);
        }
        con.release();
      }
    );
  });
};

export const aidatGetir = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("SELECT * FROM aidat WHERE user_id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
        console.log(results[0]);
      }
      con.release();
    });
  });
};

export const adminGetir = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query(
      "SELECT * FROM admin WHERE user_type = ?",
      ["2"],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
        con.release();
      }
    );
  });
};
export const insertAdmin = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("INSERT INTO admin SET ?", [data.id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};

export const adiatEkle = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("INSERT INTO aidat SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};

export const aidatGuncelle = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query(
      "UPDATE aidat SET date = ?  WHERE id = ?",
      [data.date, data.id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
        con.release();
      }
    );
  });
};

export const updateAllUser = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query(
      "UPDATE kullanıcı SET name = ?, address = ?  WHERE id = ?",
      [data.name, data.address, data.id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
        con.release();
      }
    );
  });
};
export const deleteUserModal = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("DELETE FROM kullanıcı WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};

export const updatePasswordUser = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query(
      "UPDATE kullanıcı SET password = ? WHERE id = ?",
      [data.password, data.id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
        con.release();
      }
    );
  });
};
export const insertDuyuru = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("INSERT INTO duyuru SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};
export const showDuyuruInfo = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query(
      "SELECT * FROM duyuru WHERE user_id = ?",
      [id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
          console.log(results);
        }
        con.release();
      }
    );
  });
};
export const insertBildirim = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("INSERT INTO bildirim SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};
export const deleteBildirimModal = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("DELETE FROM bildirim WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};
export const showBildirimInfo = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("SELECT * FROM bildirim WHERE user_id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};
export const deleteDuyuruModal = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("DELETE FROM duyuru WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};

export const insertGider = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("INSERT INTO gider SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};
export const deleteGiderModal = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("DELETE FROM gider WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};
export const showGiderInfo = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("SELECT * FROM gider WHERE user_id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};

export const insertYazilacak = (data, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("INSERT INTO yazilacak SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
      con.release();
    });
  });
};
export const showYazilacakInfo = (id, result) => {
  db(function (err, con) {
    if (err) {
    }
    con.query("SELECT * FROM yazilacak WHERE id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
      con.release();
    });
  });
};
