import Role from "./role.model";



export const createdSetupRoles = async () => {
  try {
    //funtion what count roles si mas de cero en la base de datos y si hay hace return
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;

    // Promise.all es para ejecutar todo un conjunto de  promesas que necesitan await
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
      new Role({ name: "senales" }).save(),
    ]);
    console.log(values);


    //SEGUNDA FORMA DE HACER
    // await new Role({ name: "user" }).save();
    // await new Role({ name: "admin" }).save();
    // await new Role({ name: "senales" }).save();

  } catch (err) {
    console.log(err);
  }
};

