import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      fetchCount: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fetchCount !== this.state.fetchCount) {
      console.log("componentDidUpdate called");
      this.fetchUser();
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  fetchUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data.results[0] });
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  };

  handleNextUser = () => {
    this.setState((prev) => ({ fetchCount: prev.fetchCount + 1 }));
  };

  render() {
    const { user } = this.state;

    return (
      <div>
      <h2>Random User</h2>
      <p>
        Name: {(user && `${user.name.first} ${user.name.last}`) || "No user loaded"}
      </p>
      <button onClick={this.handleNextUser}>Fetch New User</button>
    </div>
    );
  }
}

export default Lifecycle;
