import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import SceneList from '../components/Scenes/SceneList/SceneList';
import Spinner from '../components/Spinner/Spinner';
import AuthContext from '../context/auth-context';
import './Scenes.css';

class ScenesPage extends Component {
  state = {
    creating: false,
    scenes: [],
    isLoading: false,
    selectedScene: null
  };
  isActive = true;

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchScenes();
  }

  startCreateSceneHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const scene = { title, price, date, description };

    const requestBody = {
      query: `
          mutation CreateScene($title: String!, $desc: String!, $price: Float!, $date: String!) {
            createScene(sceneInput: {title: $title, description: $desc, price: $price, date: $date}) {
              _id
              title
              description
              date
              price
            }
          }
        `,
        variables: {
          title: title,
          desc: description,
          price: price,
          date: date
        }
    };

    const token = this.context.token;

    fetch('http://localhost:7000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedScenes = [...prevState.scenes];
          updatedScenes.push({
            _id: resData.data.createScene._id,
            title: resData.data.createScene.title,
            description: resData.data.createScene.description,
            date: resData.data.createScene.date,
            price: resData.data.createScene.price,
            creator: {
              _id: this.context.userId
            }
          });
          return { scenes: updatedScenes };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false, selectedScene: null });
  };

  fetchScenes() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            scenes {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch('http://localhost:7000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        const scenes = resData.data.scenes;
        if (this.isActive) {
          this.setState({ scenes: scenes, isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
        if (this.isActive) {
          this.setState({ isLoading: false });
        }
      });
  }

  showDetailHandler = sceneId => {
    this.setState(prevState => {
      const selectedScene = prevState.scenes.find(e => e._id === sceneId);
      return { selectedScene: selectedScene };
    });
  };

  bookSceneHandler = () => {
    if (!this.context.token) {
      this.setState({ selectedScene: null });
      return;
    }
    console.log(this.state.selectedScene)
    const requestBody = {
      query: `
          mutation BookScene($id: ID!) {
            bookScene(sceneId: $id) {
              _id
             createdAt
             updatedAt
            }
          }
        `,
        variables: {
          id: this.state.selectedScene._id
        }
    };

    fetch('http://localhost:7000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({ selectedScene: null });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillUnmount() {
    this.isActive = false;
  }

  render() {
    return (
      <React.Fragment>
        {(this.state.creating || this.state.selectedScene) && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Scene"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            confirmText="upload"
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                />
              </div>
            </form>
          </Modal>
        )}
        {this.state.selectedScene && (
          <Modal
            title={this.state.selectedScene.title}
            canCancel
            canConfirm={this.context.token ? true : false }
            onCancel={this.modalCancelHandler}
            onConfirm={this.bookSceneHandler}
            confirmText='Book'
          >
            <h1>{this.state.selectedScene.title}</h1>
            <h2>
              ${this.state.selectedScene.price} -{' '}
              {new Date(this.state.selectedScene.date).toLocaleDateString()}
            </h2>
            <p>{this.state.selectedScene.description}</p>
          </Modal>
        )}
        {this.context.token && (
          <div className="scenes-control">
            <p>Share your own Movie Sets!</p>
            <button className="btn" onClick={this.startCreateSceneHandler}>
              Upload
            </button>
          </div>
        )}
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <SceneList
            scenes={this.state.scenes}
            authUserId={this.context.userId}
            onViewDetail={this.showDetailHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ScenesPage;
