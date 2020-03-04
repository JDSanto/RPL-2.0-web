// @flow
import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withState } from "../../utils/State";

const styles = () => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundColor: "lightsteelblue",
    backgroundSize: "contain",
  },
  action: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
    fontSize: 14,
  },
});

type Props = {
  classes: any,
  courseId: number,
  universityCourseId: string,
  name: string,
  description: string,
  imgUri: string,
  onClickGoToCourse: (e: Event, courseId: number) => void,
};

class CourseCard extends React.PureComponent<Props> {
  render() {
    const {
      classes,
      courseId,
      universityCourseId,
      name,
      description,
      imgUri,
      onClickGoToCourse,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{universityCourseId}</Avatar>}
          title={name}
        />

        <CardMedia
          className={classes.media}
          image={
            imgUri || "https://www.materialui.co/materialIcons/social/school_black_192x192.png"
          }
          title={name}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Button onClick={e => onClickGoToCourse(e, courseId)}>Acceder</Button>

          <Button className={classes.action}>Desincribirse</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withState(withStyles(styles)(CourseCard));