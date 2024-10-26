/** @format */
import { useEffect, useReducer, useState } from "react";

import { auth, db, storage } from "./Config/fireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { v4 } from "uuid";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
const initialFormDetails = {
  movieName: "",
  release_year: 1901,
  IsOscar: false,
};
function reducer(state, action) {
  switch (action.type) {
    // [action.value.name]: This uses computed property syntax. It dynamically creates a property name based on the value of action.value.name. This ensures that the property name is always valid.
    case "CHANGE":
      return {
        ...state,
        [action.value.name]: action.value.userInput,
      };
    case "RESET":
      return { initialFormDetails };
    default:
      throw new Error("Hello😂");
  }
}

export default function Blog() {
  const [moviedb, setMoviedb] = useState([]);
  const [value, formDispatch] = useReducer(reducer, initialFormDetails);
  const moviesCollectionRef = collection(db, "Movies"); //The collection we get from Firestore
  const [updatedMovie, setUpdatedMovie] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [fileUpload, setFileUpload] = useState("");
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setIsLoggedIn(user.uid);
      } else {
        console.log("OtiJalo");
      }
    });
  }, []);

  const upDateMovie = async (id) => {
    const movieDoc = doc(db, "Movies", id);
    await updateDoc(movieDoc, { movieName: updatedMovie });
    setUpdatedMovie("");
  };
  const imagesListRef = ref(storage, "projectFiles/");
  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolder = ref(storage, `projectFiles/${fileUpload.name + v4()} `);
    try {
      await uploadBytes(filesFolder, fileUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
      setFileUpload("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url]);
            console.log(imageList);
          });
        });
      });
    } catch (e) {
      console.table(e);
    }
  }, []);
  async function handleForm(e) {
    e.preventDefault();
    try {
      await addDoc(moviesCollectionRef, {
        movieName: value.movieName,
        release_year: value.release_year,
        IsOscar: value.IsOscar,
        userId: isLoggedIn,
      });
    } catch (error) {
      console.log(error);
    }

    formDispatch({ type: "RESET" });
  }
  function formChange(e) {
    formDispatch({
      type: "CHANGE",
      value: { name: e.target.name, userInput: e.target.value },
    });
  }

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const treatedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMoviedb(treatedData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  const deleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "Movies", id);
      await deleteDoc(movieDoc);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(String(isLoggedIn));

  return (
    <div>
      <form
        onSubmit={handleForm}
        onChange={formChange}
        style={{
          display: "flex",
          gap: "0.4rem",
          flexDirection: "column",
          maxWidth: "15rem",
        }}
      >
        <label htmlFor="movieame">Movie Title</label>
        <input id="movieame" type="text" name="movieName" />

        <label htmlFor="releae_year">Release Year</label>
        <input id="releae_year" type="number" name="release_year" />
        <label htmlFor="IsOscar">Oscar Awarded</label>
        <select name="IsOscar" id="IsOscar">
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <div>
        {moviedb.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.IsOscar ? "green" : "red" }}>
              {movie.movieName}
            </h1>
            <h3>{movie.release_year}</h3>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            <label htmlFor="upDateMovie">Update Movie Title</label>
            <input
              type="text"
              id="upDateMovie"
              onChange={(e) => {
                setUpdatedMovie(e.target.value);
              }}
              value={updatedMovie}
            />
            <button onClick={() => upDateMovie(movie.id)}>Update</button>
          </div>
        ))}
      </div>
      <div>
        {/* <label htmlFor="file">Select File</label> */}
        <input
          id="file"
          type="file"
          onChange={(e) => {
            setFileUpload(e.target.files[0]); //We are taking the first File uploaded
          }}
        />
        <button onClick={uploadFile}>Submit File</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "80dvw" }}>
        {imageList.map((url) => {
          return (
            <div key={url}>
              <img
                style={{
                  width: "300px",
                  margin: "10px",
                }}
                src={url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
