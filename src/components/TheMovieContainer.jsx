import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import '~/styles/Home.css'
import '~/core/movie.js'

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 60px 150px;
`
const Movie = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`
const Front = styled.img`
  &:hover {
    color: red;
  }
  cursor: pointer;
  border: solid;
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  background: red;
`
const BlankFront = styled.div`
  &:hover {
    color: red;
  }
  cursor: pointer;
  border: solid;
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 100px;
`
const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  cursor: pointer;
  background: white;
  border: solid;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: white;
  color: black;
  font-weight: bold;
  border-color: red;
`
const MovieYear = styled.div`
  color: red;
`
const MovieTitle = styled.div`
  text-align: center;
`
export default function TheMovieContainer({ movies }) {
  const blankArray = ['검', '색', '결', '과', '가', '없', '습', '니', '다']
  const navigate = useNavigate()
  function goToLink(id) {
    console.log(id)
    navigate(`/movies/${id}`)
  }

  return (
    <>
      {movies.length ? (
        <MovieContainer>
          {movies.map(movie => (
            <Movie key={movie.imdbID}>
              <div className="flip">
                <div className="card">
                  <Front
                    src={movie.Poster}
                    alt="moviePoster"
                    onError={e => {
                      e.target.src =
                        'https://media.istockphoto.com/id/1187851390/ko/%EB%B2%A1%ED%84%B0/oops%EC%97%90-%EB%8C%80%ED%95%9C-%ED%91%9C%ED%98%84-%EB%8B%A8%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8.jpg?s=170667a&w=0&k=20&c=Qu1ZAd98S05ksRegWwHRdbH50w7NJ_1CbFlloD-yD7g='
                    }}
                  />
                  <Back
                    onClick={() => {
                      goToLink(movie.imdbID)
                    }}>
                    <MovieYear>{movie.Year}</MovieYear>
                    <MovieTitle>{movie.Title}</MovieTitle>
                  </Back>
                </div>
              </div>
            </Movie>
          ))}
        </MovieContainer>
      ) : (
        <MovieContainer>
          {blankArray.map(movie => (
            <Movie key={movie.imdbID}>
              <div className="flip">
                <div className="card">
                  <BlankFront>{movie}</BlankFront>
                  <Back>
                    <MovieYear>{movie.Year}</MovieYear>
                    <MovieTitle>{movie.Title}</MovieTitle>
                  </Back>
                </div>
              </div>
            </Movie>
          ))}
        </MovieContainer>
      )}
    </>
  )
}
