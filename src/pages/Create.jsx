import { NavLink,} from "react-router-dom"
import { useState } from "react"


function Create() {
  return (
    <div>
      <h1 className="text-center text-4xl font-medium mb-3">Create New Recipie</h1>

      <form className="flex flex-col items-center justify-center">
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Ingredients:</span>
          </label>
          <div className="flex gap-5 mb-1">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-outline btn-secondary">Add</button>
          </div>
          <p>Ingredients: <span>Tuz, Go'sht, Suv</span></p>
        </div>

        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Cooking Time:</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input
            type="url"
            placeholder="Past Url"
            className="textarea input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea
            type="text"
            placeholder="Type here"
            className="textarea input-bordered w-full max-w-xs"
          ></textarea>
        </div>
        <button className="btn btn-outline btn-secondary w-80">Create</button>
      </form>
    </div>
  )
}

export default Create