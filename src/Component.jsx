import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  customH1: {
    color: 'red',
  },
  borderGray: {
    border: '1px solid #C0C0C0',
  },
});

function Page({ id, options, count, color, data }) {
  return (
    <MyWonderfulComponent id={id} options={options} count={count} color={color} data={data}>
      I'm text from a component
    </MyWonderfulComponent>
  );
}

function MyWonderfulComponent({ id, options, children, other, count }) {
  const countNumber = count;
  const [summ, setSumm] = useState(countNumber);

  const classes = useStyles();

  //отработает 1 раз после render`a
  useEffect(() => {
    if (
      id &&
      options &&
      options.params &&
      options.params.fields &&
      options.params.fields.isDynamic
    ) {
      setSumm(summ + 1);
    }
  }, []);

  return (
    <div>
      <h1 className={classes.customH1}>Hello World!</h1>
      <Grid container spacing={1} justifyContent="center">
        <Grid container item xs={3} spacing={3} className={classes.borderGray}>
          {children}
        </Grid>
        <Grid container item xs={3} spacing={3} className={classes.borderGray}>
          {summ}
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;
